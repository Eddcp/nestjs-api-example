import { ApiProperty } from '@nestjs/swagger';

class UserSearchDTO {
  @ApiProperty({ required: false })
  name: string;
}

export default UserSearchDTO;
