import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { User } from '../entities/user.entity';
import { CoreOutput } from 'src/common/dtos/output.dto';

@InputType()
export class AddAddressInput extends PickType(User, ['id', 'address']) {}

@ObjectType()
export class AddAddressOutput extends CoreOutput {}
