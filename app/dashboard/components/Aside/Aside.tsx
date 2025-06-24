import Image from "next/image";
import React from "react";
import AsideComponent from "./AsideComponent";

import dashboardIcon from "@/public/icons/aside/dashboard.svg";
import CampaignsIcon from "@/public/icons/aside/Frame.svg";
import TemplatedIcon from "@/public/icons/aside/templates.svg";
import CartIcon from "@/public/icons/aside/Cart.svg";
import ReportsIcon from "@/public/icons/aside/Reports.svg";
import CustomersIcons from "@/public/icons/aside/Customers.svg";
import SupportIcon from "@/public/images/icons/support.svg";
import SettingsIcon from "@/public/images/icons/settings.svg";

import PlanInformation from "./PlanInformation";

const Aside = () => {
    return (
        <div className="flex flex-col justify-between px-4 outline-2 outline-red-500">
            <div className="">
                <div className="mx-2 my-6 flex items-center gap-2">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={50}
                        height={50}
                        className="h-10 w-10"
                    />
                    <span className="font-bold tracking-widest">LightMail</span>
                </div>
                <AsideComponent val={0}>
                    <Image
                        src={dashboardIcon}
                        alt="dashboard"
                        height={24}
                        width={24}
                    />
                    <span>Dashboard</span>
                </AsideComponent>
                <AsideComponent val={1}>
                    <Image
                        src={CampaignsIcon}
                        alt="dashboard"
                        height={24}
                        width={24}
                    />
                    <span>Campaigns</span>
                </AsideComponent>
                <AsideComponent val={2}>
                    <Image
                        src={TemplatedIcon}
                        alt="dashboard"
                        height={24}
                        width={24}
                    />
                    <span>Templates</span>
                </AsideComponent>
                <AsideComponent val={3}>
                    <Image
                        src={CartIcon}
                        alt="dashboard"
                        height={24}
                        width={24}
                    />
                    <span>Carts</span>
                </AsideComponent>
                <AsideComponent val={4}>
                    <Image
                        src={ReportsIcon}
                        alt="dashboard"
                        height={24}
                        width={24}
                    />
                    <span>Reports</span>
                </AsideComponent>
                <AsideComponent val={5}>
                    <Image
                        src={CustomersIcons}
                        alt="dashboard"
                        height={24}
                        width={24}
                    />
                    <span>Customers</span>
                </AsideComponent>
            </div>
            <div className="grid">
                <PlanInformation />
                <div className="mt-7">
                    <AsideComponent val={6}>
                        <Image
                            src={SupportIcon}
                            alt="support icon"
                            height={24}
                            width={24}
                        />
                        <span>Support</span>
                    </AsideComponent>
                    <AsideComponent val={7}>
                        <Image
                            src={SettingsIcon}
                            alt="settings icon"
                            height={24}
                            width={24}
                        />
                        <span>Settings</span>
                    </AsideComponent>
                </div>
            </div>
        </div>
    );
};

export default Aside;
