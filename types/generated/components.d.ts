import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsItems extends Schema.Component {
  collectionName: 'components_components_items';
  info: {
    displayName: 'items';
    icon: 'cube';
  };
  attributes: {
    quantidade: Attribute.Integer;
    item_tipo: Attribute.Relation<
      'components.items',
      'oneToOne',
      'api::item-tipo.item-tipo'
    >;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    texto: Attribute.String;
    url: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Attribute.DefaultTo<'/'>;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.items': ComponentsItems;
      'components.link': ComponentsLink;
    }
  }
}
