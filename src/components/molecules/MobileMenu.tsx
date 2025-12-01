import type {MobileMenuProps} from '../../config/types';
import { Logo } from '../atoms/Logo';
import { Icon } from '../atoms/Icon';
import { Button } from '../atoms/Button';

export const MobileMenu = ({items, isOpen, onClose}: MobileMenuProps) => {
    if (!isOpen) return null;
    return (
    <div className="mobile-menu-overlay" style={{ display: 'flex' }}>
      <div className='mobile-menu-header'>
        <Logo variant="whiteplus" />
        <button onClick={onClose} className="close-button">
          <Icon variant="close" />
        </button>
      </div>
      <div className="mobile-menu-content">
        {items.map((item) => (
          <a key={item.href} href={item.href} onClick={onClose}>{item.label}</a>
        ))}
        <Button variant="light">LOGIN</Button>
   
        <div className="social-icons">
          <Icon variant="facebook" />
          <Icon variant="twitter" />
        </div>
      </div>
    </div>
  );
};