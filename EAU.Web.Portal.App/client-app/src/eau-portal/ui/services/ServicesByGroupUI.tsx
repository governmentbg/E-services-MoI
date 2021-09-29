import defaultImg from 'assets/images/services/icon-service.svg';
import { Button, Constants, Nomenclatures, Service, ServiceGroup, WaysToStartService } from 'eau-core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'reactstrap';

interface ServicesByGroupProps {
    serviceGroup: ServiceGroup;
}

export const ServicesByGroupUI: React.FC<ServicesByGroupProps> = (props) => {

    const [services, setServices] = useState<Service[]>();
    const [isOpen, setIsOpen] = useState<boolean>();
    const [imgSrc, setImgSrc] = useState<any>();

    useEffect(() => {
        import(/* webpackMode: "eager" */ `assets/images/services/${props.serviceGroup.iconName}`)
            .then(imgSrc => imgSrc && setImgSrc(imgSrc.default))
            .catch(() => setImgSrc(defaultImg));
    }, []);

    return (
        <>
            <Button className={isOpen ? "service service-toggle" : "service service-toggle collapsed"} aria-expanded={isOpen ? isOpen : false} type="button" data-toggle="collapse" onClick={toggle}>
                {imgSrc ? <img className="service-image" src={imgSrc} alt="" /> : null}
                <h2 className="service-title">{props.serviceGroup.name}</h2>
            </Button>
            <Collapse isOpen={isOpen} >
                <ul className="service-subnav">

                    {services && services.length > 0 && services.map((item: Service) => {
                        if (item.initiationTypeID == WaysToStartService.ByAplication) {
                            return (
                                <li key={item.serviceID}>
                                    <Link to={Constants.PATHS.APPLICATION_PROCESSES.replace(':serviceID', item.serviceID.toString()).replace(':sectionCode', '')} >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        }
                        else if (item.initiationTypeID == WaysToStartService.ByRedirectToWebPage) {
                            if (item.serviceUrl.indexOf("http") == 0) {
                                return (
                                    <li key={item.serviceID}>
                                        <a href={item.serviceUrl}>{item.name}</a>
                                    </li>
                                );
                            }
                            else {
                                return (
                                    <li key={item.serviceID}>
                                        <Link to={item.serviceUrl} >
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            }
                        }
                        else {
                            return null;
                        }
                    })}

                </ul>
            </Collapse>
        </>);

    function toggle() {

        if (!services) {
            Nomenclatures.getServices(el => el.groupID == props.serviceGroup.groupID).then(res => {

                if (res && res.length > 0)
                    setServices(res.filter(m => m.isActive == true));

                setIsOpen(!isOpen);
            });
        } else
            setIsOpen(!isOpen);
    }
}