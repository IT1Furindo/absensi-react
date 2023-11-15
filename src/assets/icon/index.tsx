import { FC } from "react";
import { ArrowLeftDouble } from "./arrow";
import { DollarIcon } from "./dollar";
import { HomeIcon } from "./home";
import { PhoneIcon } from "./phone";
import { Facebook, Github, LinkedIn, Twitter } from "./social";
import { UserIcon } from "./user";

interface IIconProps {
    icon:
        | "home"
        | "dollar"
        | "user"
        | "phone"
        | "facebook"
        | "github"
        | "linkedIn"
        | "facebook"
        | "arrowLeftDouble"
        | "twitter";
}

export const Icon: FC<IIconProps> = ({ icon }) => {
    switch (icon) {
        case "home":
            return <HomeIcon />;

        case "dollar":
            return <DollarIcon />;

        case "user":
            return <UserIcon />;

        case "phone":
            return <PhoneIcon />;

        case "facebook":
            return <Facebook />;

        case "github":
            return <Github />;

        case "linkedIn":
            return <LinkedIn />;

        case "twitter":
            return <Twitter />;

        case "arrowLeftDouble":
            return <ArrowLeftDouble />;

        default:
            return;
    }
};
