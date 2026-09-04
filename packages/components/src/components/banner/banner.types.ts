import type { ValueOf } from '../../utils/types';

import type { BANNER_VARIANT, MOTION_PHASE } from './banner.constants';

type BannerVariant = ValueOf<typeof BANNER_VARIANT>;
type MotionPhase = ValueOf<typeof MOTION_PHASE>;

export type { BannerVariant, MotionPhase };
