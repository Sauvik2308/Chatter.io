import { mongo, Schema } from "mongoose";

const meetingSchema = new Schema({
    user_id: { type: String },
    meetingCode: { type: String, required: true },
    dat: { type: Date, default: Date.now, required: true }
})

const Meeting = mongooose.model("Meeting", meetingSchema);

export { Meeting };