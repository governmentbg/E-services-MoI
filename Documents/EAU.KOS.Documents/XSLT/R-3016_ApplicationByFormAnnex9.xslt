﻿<xsl:stylesheet version="1.0" xmlns:ABFA9="http://ereg.egov.bg/segment/R-3016"
                xmlns:EASH="http://ereg.egov.bg/segment/0009-000152"
				        xmlns:ESA="http://ereg.egov.bg/segment/0009-000016"
				        xmlns:REC="http://ereg.egov.bg/segment/0009-000015"
				        xmlns:P="http://ereg.egov.bg/segment/0009-000008"
				        xmlns:NM="http://ereg.egov.bg/segment/0009-000005"
				        xmlns:ID="http://ereg.egov.bg/segment/0009-000006"
				        xmlns:IDBD="http://ereg.egov.bg/segment/0009-000099"
				        xmlns:PA="http://ereg.egov.bg/segment/0009-000094"
				        xmlns:ABFA9D="http://ereg.egov.bg/segment/R-3042"
				        xmlns:PI="http://ereg.egov.bg/segment/R-3015"
				        xmlns:AUT="http://ereg.egov.bg/segment/0009-000012"
				        xmlns:DBIF="http://ereg.egov.bg/segment/R-3041"
				        xmlns:IBDIP="http://ereg.egov.bg/segment/R-3033"
				        xmlns:OICIBID="http://ereg.egov.bg/value/R-3034"
				        xmlns:DMST="http://ereg.egov.bg/segment/R-3040"
				        xmlns:SARD="http://ereg.egov.bg/segment/0009-000141"
				        xmlns:EASF="http://ereg.egov.bg/segment/0009-000153"
				        xmlns:PD="http://ereg.egov.bg/segment/R-3037"
				        xmlns:E="http://ereg.egov.bg/segment/0009-000013"
                xmlns:DECL="http://ereg.egov.bg/segment//R-3136"
                xmlns:ds="http://www.w3.org/2000/09/xmldsig#"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:ADD="http://ereg.egov.bg/segment/0009-000139"
                xmlns:xslExtension="urn:XSLExtension"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
				
xmlns:ms="urn:schemas-microsoft-com:xslt" xsi:type="xsl:transform" >
  <xsl:include href="./KOSBaseTemplates.xslt"/>
  <xsl:param name="SignatureXML"></xsl:param>

  <xsl:output omit-xml-declaration="yes" method="html"/>
  <xsl:template match="ABFA9:ApplicationByFormAnnex9">
    <xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html&gt;</xsl:text>
    <html>
      <xsl:call-template name="Head"/>
      <body>
        <table align="center" cellpadding="5" width= "700px">
          <thead>
            <tr>
              <th>
                &#160;
              </th>
              <th >
                <p align="right">
                  ПРИЛОЖЕНИЕ № 9
                </p>
              </th>
            </tr>
            <tr>
              <th>
                &#160;
              </th>
              <th >
                <p align="right">
                  <xsl:call-template name="IssuingPoliceDepartmentHeader">
                    <xsl:with-param name="IssuingPoliceDepartment" select = "ABFA9:IssuingPoliceDepartment" />
                  </xsl:call-template>
                </p>
              </th>

            </tr>
            <tr>
              <th colspan ="2">
                &#160;
              </th>
            </tr>
            <tr>
              <th colspan ="2">
                <h2>ЗАЯВЛЕНИЕ</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan ="2">
                &#160;
              </td>
            </tr>
            <tr>
              <td colspan ="2">
                &#160;
              </td>
            </tr>
            
            <xsl:call-template name="ApplicationElectronicServiceApplicantAndRepresentativeWithAddress">
              <xsl:with-param name="ElectronicServiceApplicant" select = "ABFA9:ElectronicAdministrativeServiceHeader/EASH:ElectronicServiceApplicant" />
              <xsl:with-param name="Phone" select = "ABFA9:ApplicationByFormAnnex9Data/ABFA9D:PersonalInformation/PI:MobilePhone" />
              <xsl:with-param name="PersonAddress" select = "ABFA9:ApplicationByFormAnnex9Data/ABFA9D:PersonalInformation/PI:PersonAddress" />
            </xsl:call-template>
            
            <tr>
              <td colspan ="2">
                <xsl:call-template name="IssuingPoliceDepartmentDirectTo">
                  <xsl:with-param name="IssuingPoliceDepartment" select = "ABFA9:IssuingPoliceDepartment" />
                </xsl:call-template>
              </td>

            </tr>
            <tr>
              <td colspan ="2">
                <xsl:choose>
                  <xsl:when test="ABFA9:ApplicationByFormAnnex9Data/ABFA9D:PersonGrantedFromIssuingDocument">
                    &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Заявявам Ви, че желая да бъде издаден следния документ:
                  </xsl:when>
                  <xsl:otherwise>
                    &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Заявявам Ви, че желая да ми бъде издаден следния документ:
                  </xsl:otherwise>
                </xsl:choose>
              </td>
            </tr>
            <tr>
              <td colspan ="2">
                <xsl:value-of  select="ABFA9:ApplicationByFormAnnex9Data/ABFA9D:IssuingDocument"/>
              </td>

            </tr>
            <tr>
              <td colspan = "2">
                <xsl:choose>
                  <xsl:when test="ABFA9:ApplicationByFormAnnex9Data/ABFA9D:PersonGrantedFromIssuingDocument">
                    на
                    &#160;<xsl:call-template name="PersonNames">
                      <xsl:with-param name="Names" select = "ABFA9:ApplicationByFormAnnex9Data/ABFA9D:PersonGrantedFromIssuingDocument/P:Names" />
                    </xsl:call-template>&#160;с<br/>
                    ЕГН/ЛНЧ/ЛН:&#160;<xsl:value-of  select="ABFA9:ApplicationByFormAnnex9Data/ABFA9D:PersonGrantedFromIssuingDocument/P:Identifier/."/>
                  </xsl:when>
                </xsl:choose>

              </td>
            </tr>
            <xsl:choose>
              <xsl:when test = "ABFA9:ApplicationByFormAnnex9Data/ABFA9D:SpecificDataForIssuingDocumentsForKOS">
                <tr>
                  <td colspan = "2">
                    Данни, специфични за издавания документ:&#160;<xsl:value-of  select="ABFA9:ApplicationByFormAnnex9Data/ABFA9D:SpecificDataForIssuingDocumentsForKOS"/>
                  </td>
                </tr>
              </xsl:when>
            </xsl:choose>

            <xsl:call-template name="AgreementToReceiveERefusal">
              <xsl:with-param name="AgreementToReceiveERefusal" select = "ABFA9:ApplicationByFormAnnex9Data/ABFA9D:AgreementToReceiveERefusal" />
            </xsl:call-template>

            <xsl:call-template name="Declarations">
              <xsl:with-param name="Declarations" select = "ABFA9:Declarations" />
              <xsl:with-param name="Declaration" select = "ABFA9:Declarations/ABFA9:Declaration" />
            </xsl:call-template>

            <xsl:call-template name="AttachedDocuments">
              <xsl:with-param name="AttachedDocuments" select = "ABFA9:AttachedDocuments" />
              <xsl:with-param name="AttachedDocument" select = "ABFA9:AttachedDocuments/ABFA9:AttachedDocument" />
            </xsl:call-template>

            <xsl:call-template name="ApplicationElectronicAdministrativeServiceFooter">
              <xsl:with-param name="ElectronicAdministrativeServiceFooter" select = "ABFA9:ElectronicAdministrativeServiceFooter" />
              <xsl:with-param name="SignatureXML" select = "$SignatureXML" />
            </xsl:call-template>
            
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>