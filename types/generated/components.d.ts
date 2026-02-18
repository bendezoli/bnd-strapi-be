import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
    logo: Schema.Attribute.Component<'elements.logo', false>;
  };
}

export interface BlocksInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_blocks';
  info: {
    displayName: 'Info Block';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['none', 'blue', 'oceanblue']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    padding: Schema.Attribute.Enumeration<
      ['none', 'small', 'medium', 'large']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none'>;
    primaryCta: Schema.Attribute.Component<'elements.link', false>;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    secondaryCta: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navigation: Schema.Attribute.Component<'elements.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero-section': BlocksHeroSection;
      'blocks.info-block': BlocksInfoBlock;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'layout.header': LayoutHeader;
    }
  }
}
