import mongoose, { Schema } from "mongoose";

interface FaqItem extends Document {
  question: string;
  answer: string;
}

interface Catagory extends Document {
  title: string;
}

interface Banner extends Document {
  public_id: string;
  url: string;
}

interface Layout extends Document {
  type: string;
  faq: FaqItem[];
  categories: Catagory[];
  banner: {
    img: Banner;
    title: string;
    subTitle: string;
  };
}

const faqSchema = new Schema<FaqItem>({
  question: { type: String },
  answer: { type: String },
});

const catagorySchema = new Schema<Catagory>({
  title: { type: String },
});

const bannerSchema = new Schema<Banner>({
  public_id: { type: String },
  url: { type: String },
});

const layoutSchema = new Schema<Layout>({
  type: { type: String },
  faq: [faqSchema],
  categories: [catagorySchema],
  banner: {
    img: bannerSchema,
    title: { type: String },
    subTitle: { type: String },
  },
});

const LayoutModel = mongoose.model<Layout>("Layout", layoutSchema);

export default LayoutModel;
