import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  // Guardとして機能させるために、CanActivateが必要
  // ReflectorはdecoratorでセットしたmetaDataを取得する為に必要
  constructor(private reflector: Reflector) {}

  canActivate(ctx: ExecutionContext): boolean {
    const requiredStatuses = this.reflector.get<string[]>(
      'statuses',
      ctx.getHandler(),
    );

    // 実行許可
    if (!requiredStatuses) return true;

    // 一致すれば実行許可
    const { user } = ctx.switchToHttp().getRequest();
    return requiredStatuses.some((status) => user.status.includes(status));
  }
}
