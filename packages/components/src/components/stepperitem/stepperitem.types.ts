import type { OverrideEventTarget, ValueOf } from '../../utils/types';

import { VARIANT, STATUS, PULSE_STEP } from './stepperitem.constants';
import type StepperItem from './stepperitem.component';

type VariantType = ValueOf<typeof VARIANT>;
type StatusType = ValueOf<typeof STATUS>;
type StatusIconType = ValueOf<typeof STATUS>;
type PulseStep = ValueOf<typeof PULSE_STEP>;
interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, StepperItem>;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, StepperItem>;
  onKeyUpEvent: OverrideEventTarget<KeyboardEvent, StepperItem>;
}

export type { VariantType, StatusType, StatusIconType, PulseStep, Events };
