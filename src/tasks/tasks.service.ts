import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './schemas/task.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel('Task')
    private taskModel: Model<Task>
  ) {}

  async findAll() : Promise<Task[]> {
    console.log('Running findAll');
    return await this.taskModel.find().exec();
  }

  async findOne(id: string) : Promise<Task> {
    return await this.taskModel.findById(id).exec();
  }

  async create(createTaskDto: CreateTaskDto) : Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return await createdTask.save();
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) : Promise<Task> {
    await this.taskModel.updateOne({ _id: id }, updateTaskDto).exec();
    return this.findOne(id);
  }

  async remove(id: string) : Promise<Task> {
    return await this.taskModel.findByIdAndDelete(id).exec();
    // Other option
    //deleteOne({ _id: id }).exec();
  }
}
