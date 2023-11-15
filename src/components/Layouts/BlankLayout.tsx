import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import themeConfig from "../../theme.config";

const BlankLayout = () => {
    return (
        <Suspense>
            <div className={`${themeConfig.animation} p-6 animate__animated`}>
                <div className="text-black dark:text-white-dark min-h-screen">
                    <Outlet />
                </div>
            </div>
        </Suspense>
    );
};

export default BlankLayout;
