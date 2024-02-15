package com.ktds.reforce.config;

public enum FileRoute {
    USER_IMAGE("user/"),
    STORE_IMAGE("store/"),
    STORE_REVIEW_IMAGE("storeReview/"),
    BLOG_REVIEW_IMAGE("blogReview/"),
    POST_IMAGE("post/"),
    CARD_IMAGE("image/"),
    BANNER_IMAGE("banner/");


    private final String value;

    FileRoute(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return value;
    }
}