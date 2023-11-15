export interface SidebarContainerProps {
  isOpen: boolean;
}

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

export interface WorkSpaceWrapperProps {
  isOpen: boolean;
}

export interface OpenBtnProps {
  isOpen: boolean;
}
