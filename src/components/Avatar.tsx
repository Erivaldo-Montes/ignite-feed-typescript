import { ImgHTMLAttributes } from "react";

import styles from "./Avatar.module.css";

// permite que todos os atributos nativos do img seja recuperado, mesmo sem referencia-lo na interface
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      // passa todas as propriedades da tag img.(spread operator)
      {...props}
    />
  );
}
