package pl.damianmrowinski.bookratingsbackend.domain;

import javax.persistence.*;

@Entity
@Table(name = "rating")
public class RatingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long rating;

    @ManyToOne
    @JoinColumn(name = "movie_id")
    private MovieEntity movie;

    @ManyToOne
    @JoinColumn(name = "user_account_id")
    private UserAccountEntity userAccount;

    protected RatingEntity() {
    }

    protected RatingEntity(Long rating, MovieEntity movie, UserAccountEntity userAccount) {
        this.rating = rating;
        this.movie = movie;
        this.userAccount = userAccount;
    }

    public Long getId() {
        return id;
    }

    public Long getRating() {
        return rating;
    }

    public MovieEntity getMovie() {
        return movie;
    }

    public UserAccountEntity getUserAccount() {
        return userAccount;
    }
}
