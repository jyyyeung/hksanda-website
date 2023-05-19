import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
  Date: any;
};

export type File = {
  __typename?: 'File';
  _id: Scalars['ID'];
  fileName: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  extname?: Maybe<Scalars['String']>;
  imgUrl: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  imageUrl: Scalars['String'];
  alt: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  paragraph?: Maybe<Scalars['String']>;
};

export type Instructor = {
  __typename?: 'Instructor';
  id: Scalars['ID'];
  name: Scalars['String'];
  strengths: Scalars['String'];
  certificates?: Maybe<Array<Maybe<Scalars['String']>>>;
  experiences?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Rank = {
  __typename?: 'Rank';
  id: Scalars['ID'];
  name: Scalars['String'];
  awardees: Array<Maybe<Scalars['String']>>;
};

export type Syllabus = {
  __typename?: 'Syllabus';
  id: Scalars['ID'];
  index?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['String']>;
  syllabus: Array<Maybe<Scalars['String']>>;
};

export type Class = {
  __typename?: 'Class';
  id: Scalars['ID'];
  title: Scalars['String'];
  type: Scalars['String'];
  classroom?: Maybe<Scalars['String']>;
  time: Scalars['String'];
  students: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  mapQuery?: Maybe<Scalars['String']>;
};

export type CourseContent = {
  __typename?: 'CourseContent';
  id: Scalars['ID'];
  name: Scalars['String'];
  content: Scalars['String'];
};

export type View = {
  __typename?: 'View';
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
  route: Scalars['String'];
};

export type Contact = {
  __typename?: 'Contact';
  id: Scalars['ID'];
  field: Scalars['String'];
  icon: Scalars['String'];
  to?: Maybe<Scalars['String']>;
  content: Scalars['String'];
};

export type Interview = {
  __typename?: 'Interview';
  id: Scalars['ID'];
  company: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Image>>>;
  url?: Maybe<Scalars['String']>;
  publishedDate: Scalars['Date'];
};

export type Masonry = {
  __typename?: 'Masonry';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  route?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  images?: Maybe<Array<Maybe<Image>>>;
};

export type Carousel = {
  __typename?: 'Carousel';
  id: Scalars['ID'];
  route?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  images: Array<Maybe<Image>>;
};

export type InstructorInput = {
  instructorId?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  strengths: Scalars['String'];
  certificates?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  experiences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RankInput = {
  rankId: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  awardees?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SyllabusInput = {
  levelId: Scalars['ID'];
  index?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['String']>;
  syllabus?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ClassInput = {
  classId?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
  type: Scalars['String'];
  classroom?: InputMaybe<Scalars['String']>;
  time: Scalars['String'];
  students: Scalars['String'];
  location?: InputMaybe<Scalars['String']>;
  mapQuery?: InputMaybe<Scalars['String']>;
};

export type CourseContentInput = {
  courseId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
};

export type ViewInput = {
  viewId?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  route?: InputMaybe<Scalars['String']>;
};

export type ContactInput = {
  contactId?: InputMaybe<Scalars['ID']>;
  field?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
};

export type ImageInput = {
  imageUrl: Scalars['String'];
  alt: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  paragraph?: InputMaybe<Scalars['String']>;
};

export type InterviewInput = {
  interviewId?: InputMaybe<Scalars['ID']>;
  company?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<ImageInput>>>;
  url?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['Date']>;
};

export type MasonryInput = {
  masonryId?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  route?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<ImageInput>>>;
};

export type CarouselInput = {
  carouselId?: InputMaybe<Scalars['ID']>;
  route?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<Array<InputMaybe<ImageInput>>>;
};

export type Query = {
  __typename?: 'Query';
  getInstructors: Array<Maybe<Instructor>>;
  getRankings: Array<Maybe<Rank>>;
  getAssessmentSyllabus: Array<Maybe<Syllabus>>;
  getClasses: Array<Maybe<Class>>;
  getImages: Array<Maybe<File>>;
  getCourseContents?: Maybe<Array<Maybe<CourseContent>>>;
  getView?: Maybe<Array<Maybe<View>>>;
  getViewByRoute?: Maybe<View>;
  getContacts?: Maybe<Array<Maybe<Contact>>>;
  getInterviews?: Maybe<Array<Maybe<Interview>>>;
  getMasonryById?: Maybe<Masonry>;
  getMasonryByRoute?: Maybe<Array<Maybe<Masonry>>>;
  getCarouselById?: Maybe<Carousel>;
  getCarouselByRoute?: Maybe<Array<Maybe<Carousel>>>;
};


export type QueryGetViewByRouteArgs = {
  route?: InputMaybe<Scalars['String']>;
};


export type QueryGetMasonryByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetMasonryByRouteArgs = {
  route?: InputMaybe<Scalars['String']>;
};


export type QueryGetCarouselByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetCarouselByRouteArgs = {
  route?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addInstructor?: Maybe<Instructor>;
  updateInstructor?: Maybe<Instructor>;
  removeInstructor?: Maybe<Instructor>;
  updateRanking?: Maybe<Rank>;
  addClass?: Maybe<Class>;
  updateClass?: Maybe<Class>;
  removeClass?: Maybe<Class>;
  updateAssessmentSyllabus?: Maybe<Syllabus>;
  addCourseContent?: Maybe<CourseContent>;
  updateCourseContent?: Maybe<CourseContent>;
  singleUpload?: Maybe<Scalars['String']>;
  addView?: Maybe<View>;
  updateView?: Maybe<View>;
  addContact?: Maybe<Contact>;
  updateContact?: Maybe<Contact>;
  addInterview?: Maybe<Interview>;
  updateInterview?: Maybe<Interview>;
  addMasonry?: Maybe<Masonry>;
  updateMasonry?: Maybe<Masonry>;
  updateCarousel?: Maybe<Carousel>;
  addCarousel?: Maybe<Carousel>;
};


export type MutationAddInstructorArgs = {
  instructor?: InputMaybe<InstructorInput>;
};


export type MutationUpdateInstructorArgs = {
  instructor?: InputMaybe<InstructorInput>;
};


export type MutationRemoveInstructorArgs = {
  instructorId?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateRankingArgs = {
  details?: InputMaybe<RankInput>;
};


export type MutationAddClassArgs = {
  details?: InputMaybe<ClassInput>;
};


export type MutationUpdateClassArgs = {
  details?: InputMaybe<ClassInput>;
};


export type MutationRemoveClassArgs = {
  classId?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateAssessmentSyllabusArgs = {
  level?: InputMaybe<SyllabusInput>;
};


export type MutationAddCourseContentArgs = {
  course?: InputMaybe<CourseContentInput>;
};


export type MutationUpdateCourseContentArgs = {
  course?: InputMaybe<CourseContentInput>;
};


export type MutationSingleUploadArgs = {
  file?: InputMaybe<Scalars['Upload']>;
};


export type MutationAddViewArgs = {
  details?: InputMaybe<ViewInput>;
};


export type MutationUpdateViewArgs = {
  details?: InputMaybe<ViewInput>;
};


export type MutationAddContactArgs = {
  contact?: InputMaybe<ContactInput>;
};


export type MutationUpdateContactArgs = {
  contact?: InputMaybe<ContactInput>;
};


export type MutationAddInterviewArgs = {
  interview?: InputMaybe<InterviewInput>;
};


export type MutationUpdateInterviewArgs = {
  interview?: InputMaybe<InterviewInput>;
};


export type MutationAddMasonryArgs = {
  masonry?: InputMaybe<MasonryInput>;
};


export type MutationUpdateMasonryArgs = {
  masonry?: InputMaybe<MasonryInput>;
};


export type MutationUpdateCarouselArgs = {
  carousel?: InputMaybe<CarouselInput>;
};


export type MutationAddCarouselArgs = {
  carousel?: InputMaybe<CarouselInput>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  File: ResolverTypeWrapper<File>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Image: ResolverTypeWrapper<Image>;
  Instructor: ResolverTypeWrapper<Instructor>;
  Rank: ResolverTypeWrapper<Rank>;
  Syllabus: ResolverTypeWrapper<Syllabus>;
  Class: ResolverTypeWrapper<Class>;
  CourseContent: ResolverTypeWrapper<CourseContent>;
  View: ResolverTypeWrapper<View>;
  Contact: ResolverTypeWrapper<Contact>;
  Interview: ResolverTypeWrapper<Interview>;
  Masonry: ResolverTypeWrapper<Masonry>;
  Carousel: ResolverTypeWrapper<Carousel>;
  InstructorInput: InstructorInput;
  RankInput: RankInput;
  SyllabusInput: SyllabusInput;
  ClassInput: ClassInput;
  CourseContentInput: CourseContentInput;
  ViewInput: ViewInput;
  ContactInput: ContactInput;
  ImageInput: ImageInput;
  InterviewInput: InterviewInput;
  MasonryInput: MasonryInput;
  CarouselInput: CarouselInput;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Upload: Scalars['Upload'];
  Date: Scalars['Date'];
  File: File;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Int: Scalars['Int'];
  Image: Image;
  Instructor: Instructor;
  Rank: Rank;
  Syllabus: Syllabus;
  Class: Class;
  CourseContent: CourseContent;
  View: View;
  Contact: Contact;
  Interview: Interview;
  Masonry: Masonry;
  Carousel: Carousel;
  InstructorInput: InstructorInput;
  RankInput: RankInput;
  SyllabusInput: SyllabusInput;
  ClassInput: ClassInput;
  CourseContentInput: CourseContentInput;
  ViewInput: ViewInput;
  ContactInput: ContactInput;
  ImageInput: ImageInput;
  InterviewInput: InterviewInput;
  MasonryInput: MasonryInput;
  CarouselInput: CarouselInput;
  Query: {};
  Mutation: {};
  Boolean: Scalars['Boolean'];
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fileName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  extname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imgUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = ResolversObject<{
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  alt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paragraph?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstructorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Instructor'] = ResolversParentTypes['Instructor']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  strengths?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  certificates?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  experiences?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RankResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rank'] = ResolversParentTypes['Rank']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  awardees?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyllabusResolvers<ContextType = any, ParentType extends ResolversParentTypes['Syllabus'] = ResolversParentTypes['Syllabus']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  syllabus?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClassResolvers<ContextType = any, ParentType extends ResolversParentTypes['Class'] = ResolversParentTypes['Class']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  classroom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  students?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mapQuery?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CourseContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['CourseContent'] = ResolversParentTypes['CourseContent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['View'] = ResolversParentTypes['View']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  route?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  icon?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InterviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['Interview'] = ResolversParentTypes['Interview']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  company?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MasonryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Masonry'] = ResolversParentTypes['Masonry']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CarouselResolvers<ContextType = any, ParentType extends ResolversParentTypes['Carousel'] = ResolversParentTypes['Carousel']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  images?: Resolver<Array<Maybe<ResolversTypes['Image']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getInstructors?: Resolver<Array<Maybe<ResolversTypes['Instructor']>>, ParentType, ContextType>;
  getRankings?: Resolver<Array<Maybe<ResolversTypes['Rank']>>, ParentType, ContextType>;
  getAssessmentSyllabus?: Resolver<Array<Maybe<ResolversTypes['Syllabus']>>, ParentType, ContextType>;
  getClasses?: Resolver<Array<Maybe<ResolversTypes['Class']>>, ParentType, ContextType>;
  getImages?: Resolver<Array<Maybe<ResolversTypes['File']>>, ParentType, ContextType>;
  getCourseContents?: Resolver<Maybe<Array<Maybe<ResolversTypes['CourseContent']>>>, ParentType, ContextType>;
  getView?: Resolver<Maybe<Array<Maybe<ResolversTypes['View']>>>, ParentType, ContextType>;
  getViewByRoute?: Resolver<Maybe<ResolversTypes['View']>, ParentType, ContextType, Partial<QueryGetViewByRouteArgs>>;
  getContacts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contact']>>>, ParentType, ContextType>;
  getInterviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['Interview']>>>, ParentType, ContextType>;
  getMasonryById?: Resolver<Maybe<ResolversTypes['Masonry']>, ParentType, ContextType, Partial<QueryGetMasonryByIdArgs>>;
  getMasonryByRoute?: Resolver<Maybe<Array<Maybe<ResolversTypes['Masonry']>>>, ParentType, ContextType, Partial<QueryGetMasonryByRouteArgs>>;
  getCarouselById?: Resolver<Maybe<ResolversTypes['Carousel']>, ParentType, ContextType, Partial<QueryGetCarouselByIdArgs>>;
  getCarouselByRoute?: Resolver<Maybe<Array<Maybe<ResolversTypes['Carousel']>>>, ParentType, ContextType, Partial<QueryGetCarouselByRouteArgs>>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addInstructor?: Resolver<Maybe<ResolversTypes['Instructor']>, ParentType, ContextType, Partial<MutationAddInstructorArgs>>;
  updateInstructor?: Resolver<Maybe<ResolversTypes['Instructor']>, ParentType, ContextType, Partial<MutationUpdateInstructorArgs>>;
  removeInstructor?: Resolver<Maybe<ResolversTypes['Instructor']>, ParentType, ContextType, Partial<MutationRemoveInstructorArgs>>;
  updateRanking?: Resolver<Maybe<ResolversTypes['Rank']>, ParentType, ContextType, Partial<MutationUpdateRankingArgs>>;
  addClass?: Resolver<Maybe<ResolversTypes['Class']>, ParentType, ContextType, Partial<MutationAddClassArgs>>;
  updateClass?: Resolver<Maybe<ResolversTypes['Class']>, ParentType, ContextType, Partial<MutationUpdateClassArgs>>;
  removeClass?: Resolver<Maybe<ResolversTypes['Class']>, ParentType, ContextType, Partial<MutationRemoveClassArgs>>;
  updateAssessmentSyllabus?: Resolver<Maybe<ResolversTypes['Syllabus']>, ParentType, ContextType, Partial<MutationUpdateAssessmentSyllabusArgs>>;
  addCourseContent?: Resolver<Maybe<ResolversTypes['CourseContent']>, ParentType, ContextType, Partial<MutationAddCourseContentArgs>>;
  updateCourseContent?: Resolver<Maybe<ResolversTypes['CourseContent']>, ParentType, ContextType, Partial<MutationUpdateCourseContentArgs>>;
  singleUpload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationSingleUploadArgs>>;
  addView?: Resolver<Maybe<ResolversTypes['View']>, ParentType, ContextType, Partial<MutationAddViewArgs>>;
  updateView?: Resolver<Maybe<ResolversTypes['View']>, ParentType, ContextType, Partial<MutationUpdateViewArgs>>;
  addContact?: Resolver<Maybe<ResolversTypes['Contact']>, ParentType, ContextType, Partial<MutationAddContactArgs>>;
  updateContact?: Resolver<Maybe<ResolversTypes['Contact']>, ParentType, ContextType, Partial<MutationUpdateContactArgs>>;
  addInterview?: Resolver<Maybe<ResolversTypes['Interview']>, ParentType, ContextType, Partial<MutationAddInterviewArgs>>;
  updateInterview?: Resolver<Maybe<ResolversTypes['Interview']>, ParentType, ContextType, Partial<MutationUpdateInterviewArgs>>;
  addMasonry?: Resolver<Maybe<ResolversTypes['Masonry']>, ParentType, ContextType, Partial<MutationAddMasonryArgs>>;
  updateMasonry?: Resolver<Maybe<ResolversTypes['Masonry']>, ParentType, ContextType, Partial<MutationUpdateMasonryArgs>>;
  updateCarousel?: Resolver<Maybe<ResolversTypes['Carousel']>, ParentType, ContextType, Partial<MutationUpdateCarouselArgs>>;
  addCarousel?: Resolver<Maybe<ResolversTypes['Carousel']>, ParentType, ContextType, Partial<MutationAddCarouselArgs>>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Upload?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  File?: FileResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Instructor?: InstructorResolvers<ContextType>;
  Rank?: RankResolvers<ContextType>;
  Syllabus?: SyllabusResolvers<ContextType>;
  Class?: ClassResolvers<ContextType>;
  CourseContent?: CourseContentResolvers<ContextType>;
  View?: ViewResolvers<ContextType>;
  Contact?: ContactResolvers<ContextType>;
  Interview?: InterviewResolvers<ContextType>;
  Masonry?: MasonryResolvers<ContextType>;
  Carousel?: CarouselResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
}>;

