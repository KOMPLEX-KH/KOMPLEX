export interface ApiWrapper<T> {
    success: boolean,
    data: T,
    hasMore: boolean,
    message: string,
}