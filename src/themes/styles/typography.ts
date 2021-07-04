import { EBreakpoints } from "~ts/enums";

export enum EFonts {
  Body = "body",
  FeaturedHeading = "featuredHeading",
  Heading01 = "heading01",
  Heading02 = "heading02",
  Heading03 = "heading03",
  Heading04 = "heading04",
  Blockquote = "blockquote",
  List = "list",
  FeaturedButton = "featuredButton",
  Tags = "tags"
}

export const fonts = {
  [EFonts.Body]: {
    [EBreakpoints.MOBILE]: {
      fontSize: "16px",
      fontFamily: "Lato",
      fontWeight: "400",
      lineHeight: "1.4"
    },
    [EBreakpoints.LAPTOP]: {
      fontSize: "18px",
      lineHeight: "1.625"
    }
  },
  [EFonts.List]: {
    [EBreakpoints.MOBILE]: {
      lineHeight: "1"
    },
    [EBreakpoints.LAPTOP]: {
      lineHeight: "1.2"
    }
  },
  [EFonts.Heading01]: {
    [EBreakpoints.MOBILE]: {
      fontSize: "26px",
      fontWeight: "700",
      lineHeight: "1.1"
    },
    [EBreakpoints.LAPTOP]: {
      fontSize: "36px",
      lineHeight: "1.2"
    }
  },
  [EFonts.FeaturedHeading]: {
    [EBreakpoints.MOBILE]: {
      fontSize: "70px",
      fontWeight: "700",
      lineHeight: "1.1"
    },
    [EBreakpoints.LAPTOP]: {
      fontSize: "90px",
      lineHeight: "1.2"
    }
  },
  [EFonts.Heading02]: {
    [EBreakpoints.MOBILE]: {
      fontSize: "22px",
      fontWeight: "700",
      lineHeight: "1.2"
    },
    [EBreakpoints.LAPTOP]: {
      fontSize: "28px",
      lineHeight: "1.3"
    }
  },
  [EFonts.Heading03]: {
    [EBreakpoints.MOBILE]: {
      fontSize: "18px",
      fontWeight: "700",
      lineHeight: "1.2"
    },
    [EBreakpoints.LAPTOP]: {
      fontSize: "23px",
      lineHeight: "1.4"
    }
  },
  [EFonts.Heading04]: {
    [EBreakpoints.MOBILE]: {
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: "1.2"
    },
    [EBreakpoints.LAPTOP]: {
      fontSize: "18px",
      lineHeight: "1.5"
    }
  },
  [EFonts.Blockquote]: {
    [EBreakpoints.MOBILE]: {
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: "1.4"
    },
    [EBreakpoints.LAPTOP]: {
      fontSize: "20px",
      lineHeight: "1.625"
    }
  },
  [EFonts.FeaturedButton]: {
    [EBreakpoints.MOBILE]: {
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: "1.2"
    },
    [EBreakpoints.LAPTOP]: {
      fontSize: "24px",
      lineHeight: "1.2"
    }
  },
  [EFonts.Tags]: {
    [EBreakpoints.MOBILE]: {
      fontSize: "10px",
      lineHeight: "1.4"
    },
    [EBreakpoints.LAPTOP]: {
      fontSize: "12px",
      lineHeight: "1.625"
    }
  }
};
