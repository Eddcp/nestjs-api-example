import { ApiProperty } from '@nestjs/swagger';

class UserDTO {
  @ApiProperty()
  name: string;
}

export default UserDTO;
