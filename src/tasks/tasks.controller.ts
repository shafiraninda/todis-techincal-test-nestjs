import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Task } from "src/entity/task.entity";
import { TasksService } from "./tasks.service";

@Controller()
export class TasksController {
    constructor(private tasksService: TasksService){}

    @Get()
    getAllTasks(): Promise<Task[]>{
        return this.tasksService.getTasks()
    }

    @Post()
    create(@Body() task:Task){
        return this.tasksService.addTask(task);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() task:Task){
        return this.tasksService.editTask(Number(id), task);
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.tasksService.deleteTask(Number(id))
    }
}