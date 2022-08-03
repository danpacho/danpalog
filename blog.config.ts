import getAuthorContactHref, {
    ContactPlatformType,
} from "@utils/function/contact/getContactHref"

export interface UserPalleteType {
    primary1: string
    primary2: string
    primary3: string
    primary4: string
}
const userPallete: UserPalleteType = {
    primary1: "#F2E2CE",
    primary2: "#D9BD9C",
    primary3: "#A68A68",
    primary4: "#776350",
}

export interface AuthorInfoType {
    name: string
    currentGoal: string
    currentState: string
    contacts: {
        [key in ContactPlatformType]: string
    }
    logoImageUrl: string
    bannerImageUrl: string
    faviconUrl: string
}
const authorInfo: AuthorInfoType = {
    name: "danpacho",
    currentState: "keep studying",
    currentGoal: "make people move",
    contacts: {
        email: getAuthorContactHref("email", "danpa725@cau.ac.kr"),
        github: getAuthorContactHref("github", "danpacho"),
        youtube: "",
        facebook: "",
        instagram: "",
        linkedin: "",
        twitter: "",
    },
    bannerImageUrl: "/banner.webp",
    logoImageUrl: "/logo.webp",
    faviconUrl: "/favicon.webp",
}

interface BlogInfoType {
    url: string
    siteName: string
    subtitle: string
    copyright: string
    language: string
    googleAnalyticsID?: string
}
const blogInfo: BlogInfoType = {
    url: "https://danpalog.vercel.app",
    siteName: "Danpa Log",
    subtitle: "기록하는 습관을 만들어 봅시다",
    copyright: `${
        authorInfo.name
    }© All rights reserved ${new Date().getFullYear()}.`,
    language: "ko",
}

const blogContentsDirectoryName = "blog" as const
interface ConfigType extends BlogInfoType {
    useTXT: boolean
    useKatex: boolean
    useMemo: boolean
    useMobileTOC: boolean
    userPallete: UserPalleteType
    blogContentsDirectoryName: `${typeof blogContentsDirectoryName}`
    author: AuthorInfoType
    postPerCategoryPage: number
    numberOfLatestPost: number
}
const config: ConfigType = {
    useTXT: false,
    useKatex: false,
    useMemo: true,
    useMobileTOC: true,
    userPallete,
    blogContentsDirectoryName,
    postPerCategoryPage: 4,
    numberOfLatestPost: 5,
    author: {
        ...authorInfo,
    },
    ...blogInfo,
}

export { config }
