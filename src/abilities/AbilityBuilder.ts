import { MongoAbility, defineAbility } from "@casl/ability";
import { abilityInject } from "../router/routes";

export let ability: null | MongoAbility = null;

export default function AbilityBuilder(permissions: string[]) {
    ability = defineAbility((can, cannot) => {
        permissions?.forEach((permission) => {
            const splittedPermission = permission.split(":");
            const type = splittedPermission[0];
            const page = splittedPermission[1];
            const ability = splittedPermission[2];
            if (type === "fe") {
                can(ability, page);
            }
        });
        // can("read", "Post");
        // can("add", "Post");
        // cannot("update", "Post");
        // cannot("delete", "Post");
    });

    abilityInject(ability);
    return ability;
}
