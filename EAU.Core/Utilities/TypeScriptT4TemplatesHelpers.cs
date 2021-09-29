using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;

namespace EAU.Utilities
{
    public static class TypeScriptT4TemplatesHelpers
    {
        private static List<TypeCode> NumericTypes = new List<TypeCode>()
        {
            TypeCode.Byte,
            TypeCode.SByte,
            TypeCode.UInt16,
            TypeCode.UInt32,
            TypeCode.UInt64,
            TypeCode.Int16,
            TypeCode.Int32,
            TypeCode.Int64,
            TypeCode.Decimal,
            TypeCode.Double,
            TypeCode.Single
        };

        public static string GenerateTypeScriptClasses(List<Type> typesToGenerate)
        {
            //for (int i = 0; i < typesToGenerate.Count; i++)
            //{
            //    var type = typesToGenerate[i];

            //    if (type != null && type.IsClass)
            //    {
            //        if (typesToGenerate.Any(tg => tg.IsSubclassOf(type)))
            //        {
            //            typesToGenerate.RemoveAt(i);
            //            typesToGenerate.Insert(0, type);
            //        }
            //    }
            //}

            var classes = new StringBuilder();

            foreach (var typeToGenerate in typesToGenerate)
            {
                classes.Append(GenerateTypeScriptClass(typeToGenerate, typesToGenerate));
                classes.Append(Environment.NewLine);
            }

            return classes.ToString();
        }

        public static string GenerateTypeScriptEnumes(List<Type> typesToGenerate)
        {
            var enumes = new StringBuilder();

            foreach (var typeToGenerate in typesToGenerate)
            {
                enumes.Append(GenerateTypeScriptEnum(typeToGenerate));
            }

            return enumes.ToString();
        }

        public static string GenerateTypeScriptClass(Type classType, List<Type> typesToGenerate = null)
        {
            if (classType.IsGenericType)
            {
                classType = classType.GetGenericTypeDefinition();
            }

            var classDefinition = new StringBuilder();

            classDefinition.Append(string.Format("@TypeSystem.typeDecorator('{0}', moduleContext.moduleName)", GetClassName(classType)));
            classDefinition.Append(Environment.NewLine);

            if (classType.BaseType != null && classType.BaseType != typeof(object))
            {
                classDefinition.Append(string.Format("export class {0} extends {1} {{ ", GetClassName(classType), GetBaseClassName(classType.BaseType)));
            }
            else
            {
                classDefinition.Append(string.Format("export class {0} extends BaseDataModel {{ ", classType.Name, classType.BaseType));
            }

            foreach (var property in classType.GetProperties().Where(p=>classType.BaseType == null || !classType.BaseType.GetProperties().Any(bp=>bp.Name == p.Name)))
            {
                WriteProperty(property, classDefinition, typesToGenerate);
            }

            classDefinition.Append(Environment.NewLine);

            classDefinition.Append(@"
    constructor(obj?: any){
    super(obj)

    this.copyFrom(obj);
    }
");

            classDefinition.Append("} ");

            classDefinition.Append(Environment.NewLine);

            return classDefinition.ToString();
        }

        public static string GenerateTypeScriptEnum(Type enumType)
        {
            if (!enumType.IsEnum)
            {
                return null;
            }

            var enumDefinition = new StringBuilder();

            enumDefinition.Append(string.Format(@"
export enum {0} {{ ", enumType.Name));
            enumDefinition.Append(Environment.NewLine);

            foreach (var value in Enum.GetValues(enumType))
            {
                enumDefinition.Append(string.Format(@"
    {0} = {1},
", value.ToString(), (int)value));
            }

            enumDefinition.Append(string.Format(@"
}}
TypeSystem.registerEnumInfo({0} , '{0}' , moduleContext.moduleName)", enumType.Name));

            return enumDefinition.ToString();
        }

        public static string ToCamelCase(this string name)
        {
            if (string.IsNullOrEmpty(name) || !char.IsUpper(name[0]))
            {
                return name;
            }
            
            char[] chars = name.ToCharArray();
            FixCasing(chars);
            return new string(chars);
        }

        #region Helpers

        private static void WriteProperty(PropertyInfo propInfo, StringBuilder sb, List<Type> typesToGenerate = null)
        {
            if (GetPrimitivePropertyTypeJsName(propInfo.PropertyType) != null)
            {
                sb.Append(string.Format(@"

    //#region {0}

    @observable private _{0}: {1}{2} = null;

    {3}
    public set {0}(val: {1}{2}){{
        this._{0} = val;
    }}

    public get {0}(): {1}{2}{{
        return this._{0};
    }} 

    //#endregion {0} ", 
        propInfo.Name.ToCamelCase(), 
        GetPrimitivePropertyTypeJsName(propInfo.PropertyType), 
        typeof(IList).IsAssignableFrom(propInfo.PropertyType) ? "[]" : "",
        string.Format("@TypeSystem.{0}('{1}')", typeof(IList).IsAssignableFrom(propInfo.PropertyType)? "propertyArrayDecorator" : "propertyDecorator", GetPrimitivePropertyTypeJsName(propInfo.PropertyType).Replace("moment.Moment", "moment"))));
            }
            else
            {
                sb.Append(string.Format(@"

    //#region {0}

    @observable private _{0}: {1}{2} = null;

    {3}
    public set {0}(val: {1}{2}){{
        this._{0} = val;
    }}

    public get {0}(): {1}{2}{{
        return this._{0};
    }} 

    //#endregion {0} ",
                    propInfo.Name.ToCamelCase(),
                    GetNonPrimitivePropertyTypeJsName(propInfo.PropertyType),
                    typeof(IList).IsAssignableFrom(propInfo.PropertyType) ? "[]" : "",
                    GetPropertyTypeDecorator(propInfo.PropertyType, typesToGenerate)));
            }
        }

        private static string GetPropertyTypeDecorator(Type propType, List<Type> typesToGenerate = null)
        {
            Type type = propType;

            if (typeof(IList).IsAssignableFrom(propType))
            { 
                type = propType.GetElementType() != null ?
                    propType.GetElementType() :
                    propType.GetGenericArguments()[0];
            }

            if (type.IsGenericType && (Nullable.GetUnderlyingType(type)== null || !Nullable.GetUnderlyingType(type).IsEnum))
            {
                type = type.GetGenericTypeDefinition();
            }

            var typeName = GetNonPrimitivePropertyTypeJsName(type);

            if (typeName == "T")
            {
                typeName = "'any'";
            }
            else if (typesToGenerate != null && typesToGenerate.Contains(type))
            {
                typeName = string.Format("moduleContext.moduleName + '.' + '{0}'", typeName);
            }

            if (typeof(IList).IsAssignableFrom(propType))
            {
                return string.Format("@TypeSystem.propertyArrayDecorator({0})", typeName);
            }
            else
            {
                return string.Format("@TypeSystem.propertyDecorator({0})", typeName);
            }
        }

        private static string GetClassName(Type classType)
        {
            if (classType.IsGenericTypeDefinition)
            {
                return string.Format("{0}<T>", classType.Name.Remove(classType.Name.IndexOf('`')));
            }

            return classType.Name;
        }

        private static string GetBaseClassName(Type classType)
        {
            var typeGenericArguments = classType.GetGenericArguments();

            if (typeGenericArguments != null && typeGenericArguments.Count() > 0)
            {
                return string.Format("{0}<{1}>", classType.Name.Remove(classType.Name.IndexOf('`')), typeGenericArguments[0].Name);
            }

            return classType.Name;
        }

        private static string GetPrimitivePropertyTypeJsName(Type type)
        {
            string typeName = null;
          
            if (typeof(IList).IsAssignableFrom(type))
            {
                type = type.GetElementType() != null ?
                    type.GetElementType() :
                    type.GetGenericArguments()[0];
            }

            if (type.IsEnum || (Nullable.GetUnderlyingType(type) != null && Nullable.GetUnderlyingType(type).IsEnum))
            {
                typeName = null;
            }
            else if (type == typeof(DateTime) || type == typeof(DateTime?))
            {
                typeName = "moment.Moment";
            }
            else if (NumericTypes.Contains(Type.GetTypeCode(Nullable.GetUnderlyingType(type) != null ? Nullable.GetUnderlyingType(type) : type)))
            {
                typeName = "number";
            }
            else if (type == typeof(string) || type == typeof(String) || type == typeof(Guid) || type == typeof(Guid?))
            {
                typeName = "string";
            }
            else if (type == typeof(bool) || type == typeof(bool?))
            {
                typeName = "boolean";
            }
            else if (type == typeof(TimeSpan) || type == typeof(TimeSpan?))
            {
                typeName = "string";
            }
            else if (type == typeof(AdditionalData) || type == typeof(object) || type.Name == "SignatureType" || type == typeof(Stream))
            {
                typeName = "any";
            }            

            return typeName;
        }

        private static string GetNonPrimitivePropertyTypeJsName(Type propType)
        {
            if (typeof(IList).IsAssignableFrom(propType))
            {
                propType = propType.GetElementType() != null ?
                    propType.GetElementType() :
                    propType.GetGenericArguments()[0];
            }
                      
            var typeName = "";
            var typeGenericArguments = propType.GetGenericArguments();

            if (propType.IsGenericParameter)
            {
                typeName = "T";
            }
            else if (typeof(IList).IsAssignableFrom(propType))
            {
                var elType = propType.GetElementType() != null ?
                    propType.GetElementType() :
                    typeGenericArguments[0];

                if (GetPrimitivePropertyTypeJsName(elType) != null)
                {
                    typeName = GetPrimitivePropertyTypeJsName(elType);
                }
                else
                {
                    typeName = elType.Name;
                }
            }
            else if (Nullable.GetUnderlyingType(propType) != null)
            {
                typeName = Nullable.GetUnderlyingType(propType).Name;
            }
            else
            {
                typeName = propType.Name;
            }

            return typeName;
        }

        private static void FixCasing(Span<char> chars)
        {
            for (int i = 0; i < chars.Length; i++)
            {
                if (i == 1 && !char.IsUpper(chars[i]))
                {
                    break;
                }

                bool hasNext = (i + 1 < chars.Length);

                // Stop when next char is already lowercase.
                if (i > 0 && hasNext && !char.IsUpper(chars[i + 1]))
                {
                    // If the next char is a space, lowercase current char before exiting.
                    if (chars[i + 1] == ' ')
                    {
                        chars[i] = char.ToLowerInvariant(chars[i]);
                    }

                    break;
                }

                chars[i] = char.ToLowerInvariant(chars[i]);
            }
        }

        #endregion
    }
}
