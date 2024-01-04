import { IsNotEmpty, IsString, IsBoolean } from "class-validator";

export class IdCardInfoDto {
    @IsString()
    @IsNotEmpty()
    Url: string;

    OutputFigure: boolean;

    OutputQualityInfo: boolean;
}
