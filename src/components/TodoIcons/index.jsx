import { TbCircleCheckFilled, TbCircleCheck } from "react-icons/tb";
import { TiDelete } from "react-icons/ti";

TbCircleCheckFilled
const iconTypes = {
    check: TbCircleCheckFilled,
    checkNone: TbCircleCheck,
    delete: TiDelete,
};

function TodoIcon({ type, ...props }) {
    const Icon = iconTypes[type];

    return <Icon {...props} />;
}

export { TodoIcon }