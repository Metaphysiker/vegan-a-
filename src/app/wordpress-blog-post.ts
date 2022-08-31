export interface WordpressBlogPost {
    id: number;
    slug: string;
    date: Date;
    link: string;
    title: {
      [rendered: string]: string
    };
    content: {
      [rendered: string]: string
    };
    yoast_head_json: any;
}
