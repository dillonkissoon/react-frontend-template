export default class BaseModel {
  toJSON() {
    const jsonedObject = {};
    for (var x in this) {
      if (x === "toJSON" || x === "constructor") {
        continue;
      }

      if (typeof this[x] == "function") {
        jsonedObject[x] = this[x];
      }

      jsonedObject[x] = this[x];
    }
    return jsonedObject;
  }
}

export class AuthModel extends BaseModel {
  constructor({ email = "ricky@ricky.com", password = null }) {
    super();
    this.email = email;
    this.password = password;
  }

  get emailMessage() {
    return `this is the email address ${this.email}`;
  }
}
