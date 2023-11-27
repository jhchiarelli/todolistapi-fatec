import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // return `API Todo List Version: ${process.env.VERSION_APP} - ${process.env.VERSION_MONTH}`;
    return `API Todo List Version: ${process.env.VERSION_APP} - ${process.env.VERSION_MONTH}\nParticipantes: Luciano, Lucas, Pamela, Rodrigo, Yuri, Jorge\n Professor: José Benedito`;
  }
}
