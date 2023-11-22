export interface NavigationLinkProps {
  $selectedMarker: string;
  $notSelectedMarker: string;
}

export interface BackgroundLineProps {
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
  $width: string;
  $rotation?: string;
  $color: string;
}

export interface IDProps {
  $id: string;
}

export interface SelectItemContainerProps {
  $isFocused: boolean;
  $isSelected: boolean;
}

export interface Colored {
  $color: string;
}

export interface Opened {
  $isOpen: boolean;
}

export interface Checked {
  $isChecked: boolean;
}

export interface Sized {
  $size: number;
}
