import { Injectable } from '@nestjs/common';
import { get_encoding, encoding_for_model } from "tiktoken";
import * as sweph from "sweph"

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World has ${get_encoding("gpt2").encode('Hello World!').length} tokens. ${sweph.calc(2451545, 1234, 5654)}`;
  }
}
