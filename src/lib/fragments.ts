export const siteLogoFragment = `siteLogo{
    asset->{
      url,
    }
  }`;

  export const socialLinksFragment = `socialLinks[]{
    _key,
    title,
    url,
    icon{
      alt,
      asset->{
        url,
      }
    }
  }`;

  export const headerNavFragment = `headerNavigation[]{
    _key,
    title,
    url,
  }`;

  export const footerNavFragment = `footerNavigation[]{
    _key,
    title,
    url,
  }`;