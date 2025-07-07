import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { User, LogOut, UserCog } from 'lucide-react';
import '../styles/menuUser.css';

const MenuUser = () => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className="config-btn">
                    <UserCog />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="menu-content"
                    sideOffset={5}
                >
                    <DropdownMenu.Item className="menu-item">Perfil</DropdownMenu.Item>
                    <DropdownMenu.Item className="menu-item">Configuración</DropdownMenu.Item>
                    <DropdownMenu.Item className="menu-item">Mi espacio</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default MenuUser;
