// PasswordInput.tsx
import * as React from "react";
import { Input, InputProps } from "@/components/ui/input"; // Import the original Input component
import { Icon } from "@iconify/react";

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          className={className}
          ref={ref}
          {...props}
        />
        <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-400">
          {showPassword ? (
            <Icon
              icon="streamline:visible-solid"
              className="h-4 w-4"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <Icon
              icon="streamline:invisible-1-solid"
              className="h-4 w-4"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
