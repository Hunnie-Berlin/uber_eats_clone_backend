import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';

@InputType()
export class MyRestaurantInput extends PickType(Restaurant, ['id']) {}

@ObjectType()
export class MyRestaurantOutput extends CoreOutput {
  @Field(() => Restaurant)
  restaurant?: Restaurant;
}
