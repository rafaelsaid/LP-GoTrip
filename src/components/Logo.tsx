import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <Link to="/" className={`block ${className}`}>
      <img 
        src="/logo.png" 
        alt="Go Trip Logo" 
        className="h-12 w-auto"
      />
    </Link>
  );
};

export default Logo;