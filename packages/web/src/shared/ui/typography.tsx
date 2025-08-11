/* eslint-disable react/prop-types */
import { VariantProps, cva } from "class-variance-authority";

import {
  ElementType,
  HTMLAttributes,
  LegacyRef,
  PropsWithChildren,
  RefAttributes,
} from "react";

const classes = cva("tracking-normal leading-base", {
  variants: {
    variant: {
      h1: "text-h1 scroll-m-20",
      h2: "text-h2 scroll-m-20 first:mt-0",
      h3: "text-h3 scroll-m-20",
      h4: "text-h4 scroll-m-20",
      h5: "text-h5 scroll-m-20",
      body: "text-body",
      small: "text-small",
      caption: "text-caption",
      muted: "text-sm text-muted-foreground",
    },

    styleType: {
      italic: "italic",
      underline: "underline",
      strike: "line-through",
    },
    fontType: {
      default: "font-ibm",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "body",
    styleType: null,
    fontType: "default",
    weight: "medium",
  },
});

type VariantType = VariantProps<typeof classes>["variant"];
type StyleType = VariantProps<typeof classes>["styleType"];
type FontType = VariantProps<typeof classes>["fontType"];
type WeightType = VariantProps<typeof classes>["weight"];

interface TypographyProps
  extends PropsWithChildren<HTMLAttributes<HTMLElement>>,
    RefAttributes<HTMLElement> {
  variant?: VariantType;
  weight?: WeightType;
  styleType?: StyleType;
  fontType?: FontType;
  componentRef?: LegacyRef<HTMLElement>;
  as?: ElementType;
}

function Typography({
  className,
  variant,
  weight,
  styleType,
  fontType,
  componentRef,
  as: As = "p",
  ...props
}: TypographyProps) {
  const Tag = As;
  return (
    <Tag
      {...props}
      className={classes({ variant, styleType, fontType, weight, className })}
      ref={componentRef}
    />
  );
}

Typography.displayName = "Typography";

Typography.h1 = (props: TypographyProps) => (
  <Typography variant="h1" as={"h1"} fontType={"default"} {...props} />
);

Typography.h2 = (props: TypographyProps) => (
  <Typography variant="h2" as={"h2"} fontType={"default"} {...props} />
);

Typography.h3 = (props: TypographyProps) => (
  <Typography variant="h3" as={"h3"} fontType={"default"} {...props} />
);

Typography.h4 = (props: TypographyProps) => (
  <Typography variant="h4" as={"h4"} fontType={"default"} {...props} />
);

Typography.h5 = (props: TypographyProps) => (
  <Typography variant="h5" as={"h5"} fontType={"default"} {...props} />
);

Typography.body = (props: TypographyProps) => (
  <Typography variant="body" as={"p"} fontType={"default"} {...props} />
);

Typography.small = (props: TypographyProps) => (
  <Typography variant="small" as={"p"} fontType={"default"} {...props} />
);

Typography.caption = (props: TypographyProps) => (
  <Typography variant="caption" as={"p"} fontType={"default"} {...props} />
);

Typography.muted = (props: TypographyProps) => (
  <Typography variant="muted" as={"p"} fontType={"default"} {...props} />
);

export type { FontType, StyleType, TypographyProps, VariantType, WeightType };
export { Typography };
