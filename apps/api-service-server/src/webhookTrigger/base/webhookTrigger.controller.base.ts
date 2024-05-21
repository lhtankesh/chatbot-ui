/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { WebhookTriggerService } from "../webhookTrigger.service";
import { WebhookTriggerCreateInput } from "./WebhookTriggerCreateInput";
import { WebhookTrigger } from "./WebhookTrigger";
import { WebhookTriggerFindManyArgs } from "./WebhookTriggerFindManyArgs";
import { WebhookTriggerWhereUniqueInput } from "./WebhookTriggerWhereUniqueInput";
import { WebhookTriggerUpdateInput } from "./WebhookTriggerUpdateInput";

export class WebhookTriggerControllerBase {
  constructor(protected readonly service: WebhookTriggerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WebhookTrigger })
  async createWebhookTrigger(
    @common.Body() data: WebhookTriggerCreateInput
  ): Promise<WebhookTrigger> {
    return await this.service.createWebhookTrigger({
      data: data,
      select: {
        createdAt: true,
        id: true,
        method: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [WebhookTrigger] })
  @ApiNestedQuery(WebhookTriggerFindManyArgs)
  async webhookTriggers(
    @common.Req() request: Request
  ): Promise<WebhookTrigger[]> {
    const args = plainToClass(WebhookTriggerFindManyArgs, request.query);
    return this.service.webhookTriggers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        method: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WebhookTrigger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async webhookTrigger(
    @common.Param() params: WebhookTriggerWhereUniqueInput
  ): Promise<WebhookTrigger | null> {
    const result = await this.service.webhookTrigger({
      where: params,
      select: {
        createdAt: true,
        id: true,
        method: true,
        updatedAt: true,
        url: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: WebhookTrigger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWebhookTrigger(
    @common.Param() params: WebhookTriggerWhereUniqueInput,
    @common.Body() data: WebhookTriggerUpdateInput
  ): Promise<WebhookTrigger | null> {
    try {
      return await this.service.updateWebhookTrigger({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          method: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: WebhookTrigger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWebhookTrigger(
    @common.Param() params: WebhookTriggerWhereUniqueInput
  ): Promise<WebhookTrigger | null> {
    try {
      return await this.service.deleteWebhookTrigger({
        where: params,
        select: {
          createdAt: true,
          id: true,
          method: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
