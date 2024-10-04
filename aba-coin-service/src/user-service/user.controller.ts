import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto, UpdateTaskDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user-data/:userId')
  getUserData(@Param('userId') userId: string) {
    return this.userService.getUserData(userId);
  }

  @Post('add-username')
  addUsername(@Body() body: { userId: string; name: string }) {
    return this.userService.addUsername(body.userId, body.name);
  }

  @Post('update-all')
  updateAll(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateAll(updateUserDto);
  }

  @Post('update-task')
  updateTask(@Body() updateTaskDto: UpdateTaskDto) {
    return this.userService.updateTask(updateTaskDto);
  }
}
