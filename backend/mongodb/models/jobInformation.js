const { connect } = require('../dbconfig');
const { v4: uuidv4 } = require('uuid'); // 引入UUID生成器，用于生成ID

class JobInformation {
    constructor(岗位描述, 岗位要求, 岗位关键词, id = null) {
        // 如果提供了id，则使用该id，否则生成一个新的UUID作为id
        this.id = id || uuidv4();
        this.岗位描述 = 岗位描述;
        this.岗位要求 = 岗位要求;
        this.岗位关键词 = 岗位关键词;
    }
  
    // 创建（Save）
    async save() {
        const db = await connect();
        const collection = db.collection('jobInformation');
        // 使用id作为文档的_id字段
        const result = await collection.insertOne({
            _id: this.id,
            岗位描述: this.岗位描述,
            岗位要求: this.岗位要求,
            岗位关键词: this.岗位关键词
        });
        return result.insertedId; // 返回插入文档的_id
    }
  
    // 读取（Find）
    static async findById(id) {
        const db = await connect();
        const collection = db.collection('jobInformation');
        const jobInfo = await collection.findOne({ _id: id });
        return jobInfo;
    }
  
    // 更新（Update）
    static async update(id, updateData) {
      const db = await connect();
      const collection = db.collection('jobInformation');
      // 注意：确保传入的id是能正确匹配MongoDB中的_id字段
      const result = await collection.updateOne({ _id: id }, { $set: updateData });
      return result; // 这将返回更新操作的结果对象
  }
  
    // 删除（Delete）
    static async deleteById(id) {
        const db = await connect();
        const collection = db.collection('jobInformation');
        const result = await collection.deleteOne({ _id: id });
        return result;
    }
  
    // 根据关键词查找职位信息，不区分大小写，允许部分匹配
    static async findByKeyword(keyword) {
      const db = await connect();
      const collection = db.collection('jobInformation');
      // 使用正则表达式构造查询条件，'i'选项表示不区分大小写
      const regex = new RegExp(keyword, 'i');
      const jobs = await collection.find({
          岗位关键词: { $regex: regex }
      }).toArray();
      return jobs;
  }
}

module.exports = JobInformation;
