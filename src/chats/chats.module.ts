// src/chats/chats.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chats } from './entities/chats.entity';
import { TipoChat } from './entities/tipo-chat.entity';
import { NivelChat } from './entities/nivel-chat.entity';
import { UsuariosChat } from './entities/usuarios-chat.entity';
import { Mensajes } from './entities/mensajes.entity';
import { ChatsService } from './services/chats.service';
import { ChatsController } from './controllers/chats.controller';
import { TipoChatService } from './services/tipo-chat.service';
import { NivelChatService } from './services/nivel-chat.service';
import { UsuariosChatService } from './services/usuarios-chat.service';
import { MensajesService } from './services/mensajes.service';
import { TipoChatController } from './controllers/tipo-chat.controller';
import { NivelChatController } from './controllers/nivel-chat.controller';
import { UsuariosChatController } from './controllers/usuarios-chat.controller';
import { MensajesController } from './controllers/mensajes.controller';



@Module({
    imports: [TypeOrmModule.forFeature([Chats, TipoChat, NivelChat, UsuariosChat, Mensajes])],
    providers: [ChatsService, TipoChatService, NivelChatService, UsuariosChatService, MensajesService],
    controllers: [ChatsController, TipoChatController, NivelChatController, UsuariosChatController, MensajesController],
})
export class ChatsModule { }