
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    let router = inject(Router);
    router.navigate(['auth']);
    return true;
};
