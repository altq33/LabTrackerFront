export interface NavigationLinkProps {
  selectedMarker: string;
  notSelectedMarker: string;
}

export interface BackgroundLineProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width: string;
  rotation?: string;
  color: string;
}

export interface TeacherAvatarProps {
  id: string;
}

export interface CoverProps {
  id: string;
}

export interface SelectItemContainerProps {
  isFocused: boolean;
  isSelected: boolean;
}

export interface TopColorIndicatorProps {
  id: string;
}

export interface ColorEntityIndicatorProps {
  id: string;
}

export interface Colored {
  color: string;
}

export interface Opened {
  isOpen: boolean;
}
