import { GlowingJump } from "./GlowingJump";
import { GlowingBall } from "./GlowingBall";
import { GlowingLine } from "./GlowingLight";
import { DrawingBorderButton as DrawingBorderButtonComponent } from "./DrawingBorderButton";
import { RippleButton as RippleButtonComponent } from "./RippleButton";
import { CursorCustom as CursorCustomComponent } from "./CursorCustom";
import { CursorShadow as CursorShadowComponent } from "./CursorShadow";
import { BlackHole as BlackHoleComponent } from "./BlackHole";
import { WaterText as WaterTextComponent } from "./WaterText";

export namespace Animates {
  export const GlowingJumpAnim = GlowingJump
  export const GlowingBallAnim = GlowingBall
  export const GlowingLineAnim = GlowingLine
  export const DrawingBorderButton = DrawingBorderButtonComponent
  export const RippleButton = RippleButtonComponent
  export const CursorCustom = CursorCustomComponent
  export const CursorShadow = CursorShadowComponent
  export const BlackHole = BlackHoleComponent
  export const WaterText = WaterTextComponent
}