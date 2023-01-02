import { useNuiState } from '../../hooks/nuiState';

import Section from './components/Section';
import Item from './components/Item';
import { FlexWrapper } from './styles';
import Input from './components/Input';

import { ComponentConfig, ComponentSettings, PedComponent } from './interfaces';

interface ComponentsProps {
  settings: ComponentSettings[];
  data: PedComponent[];
  storedData: PedComponent[];
  handleComponentDrawableChange: (component_id: number, drawable: number) => void;
  handleComponentTextureChange: (component_id: number, texture: number) => void;
  componentConfig: ComponentConfig;
  hasTracker: boolean;
  isPedFreemodeModel: boolean | undefined;
}

interface DataById<T> {
  [key: number]: T;
}

const Components = ({
  settings,
  data,
  storedData,
  handleComponentDrawableChange,
  handleComponentTextureChange,
  componentConfig,
  hasTracker,
  isPedFreemodeModel
}: ComponentsProps) => {
  const { locales } = useNuiState();

  const settingsById = settings.reduce((object, { component_id, drawable, texture, blacklist }) => {
    return { ...object, [component_id]: { drawable, texture, blacklist } };
  }, {} as DataById<Omit<ComponentSettings, 'component_id'>>);

  const componentsById: any = data.reduce((object, { component_id, drawable, texture }) => {
    return { ...object, [component_id]: { drawable, texture } };
  }, {} as DataById<Omit<PedComponent, 'component_id'>>);

  const storedComponentsById: any = storedData.reduce((object, { component_id, drawable, texture }) => {
    return { ...object, [component_id]: { drawable, texture } };
  }, {} as DataById<Omit<PedComponent, 'component_id'>>);

  if (!locales) {
    return null;
  }

  return (
    <Section title={locales.components.title}>
      {!isPedFreemodeModel && <Item title={locales.components.head}>
        <FlexWrapper>
          <Input
            title={locales.components.drawable}
            min={settingsById[0].drawable.min}
            max={settingsById[0].drawable.max}
            blacklisted={settingsById[0].blacklist.drawables}
            defaultValue={componentsById[0].drawable}
            clientValue={storedComponentsById[0].drawable}
            onChange={value => handleComponentDrawableChange(0, value)}
          />
          <Input
            title={locales.components.texture}
            min={settingsById[0].texture.min}
            max={settingsById[0].texture.max}
            blacklisted={settingsById[0].blacklist.textures}
            defaultValue={componentsById[0].texture}
            clientValue={storedComponentsById[0].texture}
            onChange={value => handleComponentTextureChange(0, value)}
          />
        </FlexWrapper>
      </Item>}
      {componentConfig.masks && <Item title={locales.components.mask}>
        <FlexWrapper>
          <Input
            title={locales.components.drawable}
            min={settingsById[1].drawable.min}
            max={settingsById[1].drawable.max}
            blacklisted={settingsById[1].blacklist.drawables}
            defaultValue={componentsById[1].drawable}
            clientValue={storedComponentsById[1].drawable}
            onChange={value => handleComponentDrawableChange(1, value)}
          />
          <Input
            title={locales.components.texture}
            min={settingsById[1].texture.min}
            max={settingsById[1].texture.max}
            blacklisted={settingsById[1].blacklist.textures}
            defaultValue={componentsById[1].texture}
            clientValue={storedComponentsById[1].texture}
            onChange={value => handleComponentTextureChange(1, value)}
          />
        </FlexWrapper>
      </Item>}
      {componentConfig.scarfAndChains && !hasTracker && <Item title={locales.components.scarfAndChains}>
        <FlexWrapper>
          <Input
            title={locales.components.drawable}
            min={settingsById[7].drawable.min}
            max={settingsById[7].drawable.max}
            blacklisted={settingsById[7].blacklist.drawables}
            defaultValue={componentsById[7].drawable}
            clientValue={storedComponentsById[7].drawable}
            onChange={value => handleComponentDrawableChange(7, value)}
          />
          <Input
            title={locales.components.texture}
            min={settingsById[7].texture.min}
            max={settingsById[7].texture.max}
            blacklisted={settingsById[7].blacklist.textures}
            defaultValue={componentsById[7].texture}
            clientValue={storedComponentsById[7].texture}
            onChange={value => handleComponentTextureChange(7, value)}
          />
        </FlexWrapper>
      </Item>}
      {componentConfig.jackets && <Item title={locales.components.jackets}>
        <FlexWrapper>
          <Input
            title={locales.components.drawable}
            min={settingsById[11].drawable.min}
            max={settingsById[11].drawable.max}
            blacklisted={settingsById[11].blacklist.drawables}
            defaultValue={componentsById[11].drawable}
            clientValue={storedComponentsById[11].drawable}
            onChange={value => handleComponentDrawableChange(11, value)}
          />
          <Input
            title={locales.components.texture}
            min={settingsById[11].texture.min}
            max={settingsById[11].texture.max}
            blacklisted={settingsById[11].blacklist.textures}
            defaultValue={componentsById[11].texture}
            clientValue={storedComponentsById[11].texture}
            onChange={value => handleComponentTextureChange(11, value)}
          />
        </FlexWrapper>
      </Item>}
      {componentConfig.shirts && <Item title={locales.components.shirt}>
        <FlexWrapper>
          <Input
            title={locales.components.drawable}
            min={settingsById[8].drawable.min}
            max={settingsById[8].drawable.max}
            blacklisted={settingsById[8].blacklist.drawables}
            defaultValue={componentsById[8].drawable}
            clientValue={storedComponentsById[8].drawable}
            onChange={value => handleComponentDrawableChange(8, value)}
          />
          <Input
            title={locales.components.texture}
            min={settingsById[8].texture.min}
            max={settingsById[8].texture.max}
            blacklisted={settingsById[8].blacklist.textures}
            defaultValue={componentsById[8].texture}
            clientValue={storedComponentsById[8].texture}
            onChange={value => handleComponentTextureChange(8, value)}
          />
        </FlexWrapper>
      </Item>}
      {componentConfig.bodyArmor && <Item title={locales.components.bodyArmor}>
        <FlexWrapper>
          <Input
            title={locales.components.drawable}
            min={settingsById[9].drawable.min}
            max={settingsById[9].drawable.max}
            blacklisted={settingsById[9].blacklist.drawables}
            defaultValue={componentsById[9].drawable}
            clientValue={storedComponentsById[9].drawable}
            onChange={value => handleComponentDrawableChange(9, value)}
          />
          <Input
            title={locales.components.texture}
            min={settingsById[9].texture.min}
            max={settingsById[9].texture.max}
            blacklisted={settingsById[9].blacklist.textures}
            defaultValue={componentsById[9].texture}
            clientValue={storedComponentsById[9].texture}
            onChange={value => handleComponentTextureChange(9, value)}
          />
        </FlexWrapper>
      </Item>}
      {componentConfig.bags && <Item title={locales.components.bags}>
        <FlexWrapper>
          <Input
            title={locales.components.drawable}
            min={settingsById[5].drawable.min}
            max={settingsById[5].drawable.max}
            blacklisted={settingsById[5].blacklist.drawables}
            defaultValue={componentsById[5].drawable}
            clientValue={storedComponentsById[5].drawable}
            onChange={value => handleComponentDrawableChange(5, value)}
          />
          <Input
            title={locales.components.texture}
            min={settingsById[5].texture.min}
            max={settingsById[5].texture.max}
            blacklisted={settingsById[5].blacklist.textures}
            defaultValue={componentsById[5].texture}
            clientValue={storedComponentsById[5].texture}
            onChange={value => handleComponentTextureChange(5, value)}
          />
        </FlexWrapper>
      </Item>}
      {componentConfig.upperBody && <Item title={locales.components.upperBody}>
        <FlexWrapper>
          <Input
            title={locales.components.drawable}
            min={settingsById[3].drawable.min}
            max={settingsById[3].drawable.max}
            blacklisted={settingsById[3].blacklist.drawables}
            defaultValue={componentsById[3].drawable}
            clientValue={storedComponentsById[3].drawable}
            onChange={value => handleComponentDrawableChange(3, value)}
          />
          <Input
            title={locales.components.texture}
            min={settingsById[3].texture.min}
            max={settingsById[3].texture.max}
            blacklisted={settingsById[3].blacklist.textures}
            defaultValue={componentsById[3].texture}
            clientValue={storedComponentsById[3].texture}
            onChange={value => handleComponentTextureChange(3, value)}
          />
        </FlexWrapper>
      </Item>}
      {componentConfig.lowerBody && <Item title={locales.components.lowerBody}>
        <FlexWrapper>
          <Input
            title={locales.components.drawable}
            min={settingsById[4].drawable.min}
            max={settingsById[4].drawable.max}
            blacklisted={settingsById[4].blacklist.drawables}
            defaultValue={componentsById[4].drawable}
            clientValue={storedComponentsById[4].drawable}
            onChange={value => handleComponentDrawableChange(4, value)}
          />
          <Input
            title={locales.components.texture}
            min={settingsById[4].texture.min}
            max={settingsById[4].texture.max}
            blacklisted={settingsById[4].blacklist.textures}
            defaultValue={componentsById[4].texture}
            clientValue={storedComponentsById[4].texture}
            onChange={value => handleComponentTextureChange(4, value)}
          />
        </FlexWrapper>
      </Item>}
      {componentConfig.shoes && <Item title={locales.components.shoes}>
        <FlexWrapper>
          <Input
            title={locales.components.drawable}
            min={settingsById[6].drawable.min}
            max={settingsById[6].drawable.max}
            blacklisted={settingsById[6].blacklist.drawables}
            defaultValue={componentsById[6].drawable}
            clientValue={storedComponentsById[6].drawable}
            onChange={value => handleComponentDrawableChange(6, value)}
          />
          <Input
            title={locales.components.texture}
            min={settingsById[6].texture.min}
            max={settingsById[6].texture.max}
            blacklisted={settingsById[6].blacklist.textures}
            defaultValue={componentsById[6].texture}
            clientValue={storedComponentsById[6].texture}
            onChange={value => handleComponentTextureChange(6, value)}
          />
        </FlexWrapper>
      </Item>}
      {componentConfig.decals && <Item title={locales.components.decals}>
        <FlexWrapper>
          <Input
            title={locales.components.drawable}
            min={settingsById[10].drawable.min}
            max={settingsById[10].drawable.max}
            blacklisted={settingsById[10].blacklist.drawables}
            defaultValue={componentsById[10].drawable}
            clientValue={storedComponentsById[10].drawable}
            onChange={value => handleComponentDrawableChange(10, value)}
          />
          <Input
            title={locales.components.texture}
            min={settingsById[10].texture.min}
            max={settingsById[10].texture.max}
            blacklisted={settingsById[10].blacklist.textures}
            defaultValue={componentsById[10].texture}
            clientValue={storedComponentsById[10].texture}
            onChange={value => handleComponentTextureChange(10, value)}
          />
        </FlexWrapper>
      </Item>}
    </Section>
  );
};

export default Components;
