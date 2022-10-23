import { MongoDataSource } from 'apollo-datasource-mongodb';
import { ObjectId } from 'mongodb';
import { Book } from './../../generated/graphql';

export default class Books extends MongoDataSource<iBook> {
  async getBooks() {
    return await this.model.find();
  }

  async getBook(id) {
    return await this.findOneById(id);
  }

  async creatBook({ title, rating, year }) {
    return await this.model.create({ title, rating, year });
  }
}
