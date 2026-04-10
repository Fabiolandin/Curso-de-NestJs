import { Module, ValidationPipe } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';
import { ProdutosModule } from './produtos/produtos.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [AuthModule, UserModule, DatabaseModule, QuestionsModule, AnswersModule, ProdutosModule],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    }
  ]
})
export class AppModule { }
