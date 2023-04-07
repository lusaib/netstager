import moment from "moment/moment";

export default function deepCopy(obj: any): any {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(deepCopy);
  }
  if (obj instanceof moment) {
    const retVal = moment(obj);
    return retVal;
  }
  if (obj instanceof Date) {
    const retVal = new Date();
    retVal.setTime(obj.getTime());
    return retVal;
  }
  const copy:any = {};
  for (const key in obj) {
    copy[key] = deepCopy(obj[key]);
  }
  return copy;
}
//this function lets us to deep copy the object ,
