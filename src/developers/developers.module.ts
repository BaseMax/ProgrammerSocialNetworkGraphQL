import { Module } from "@nestjs/common";
import { DevelopersService } from "./developers.service";
import { DevelopersResolver } from "./developers.resolver";
import { PrismaService } from "prisma/prisma.service";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "60s" },
    }),
  ],
  providers: [PrismaService, DevelopersResolver, DevelopersService],
})
export class DevelopersModule {}
