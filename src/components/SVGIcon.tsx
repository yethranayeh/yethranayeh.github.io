import type { FunctionComponent, SVGProps } from "react";

import { clsx } from "clsx";

import styles from "./SVGIcon.module.scss";

export interface SVGIconProps extends SVGProps<any> {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  disabled?: boolean;
  marginRight?: boolean;
  marginLeft?: boolean;
  small?: boolean;
  alt?: string;
}

export const SVGIcon = ({
  Icon,
  className,
  disabled,
  marginLeft,
  marginRight,
  small,
  alt,
  ...props
}: SVGIconProps) => (
  <Icon
    {...props}
    aria-label={alt}
    className={clsx(
      styles.icon,
      className,
      disabled && styles.disabled,
      marginLeft && styles.ml,
      marginRight && styles.mr,
      small && styles.small,
    )}
  />
);
