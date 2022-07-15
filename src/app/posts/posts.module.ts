import { NgModule } from '@angular/core';

import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngulatMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PostListComponent, PostCreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngulatMaterialModule,
    RouterModule,
  ],
})
export class PostsModule {}
